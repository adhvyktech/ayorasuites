import { HOTEL_CONFIG } from '../data/hotelConfig';

export interface Web3FormsResponse {
  success: boolean;
  message: string;
  isKeyMissing?: boolean;
}

export const getWeb3FormsKey = (): string => {
  return (
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
    HOTEL_CONFIG.contact.web3formsAccessKey ||
    ''
  );
};

export const submitToWeb3Forms = async (
  formData: Record<string, unknown>,
  subject: string
): Promise<Web3FormsResponse> => {
  const accessKey = getWeb3FormsKey();

  if (!accessKey) {
    return {
      success: false,
      isKeyMissing: true,
      message: 'Web3Forms API key is not configured yet. You can provide it in your environment or send directly via WhatsApp.'
    };
  }

  try {
    const payload = {
      access_key: accessKey,
      subject: subject || 'New Enquiry from Ayora Suites Website',
      from_name: 'Ayora Suites Concierge Portal',
      to: HOTEL_CONFIG.contact.primaryEmail,
      ...formData,
      submitted_at: new Date().toISOString()
    };

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (data.success) {
      return {
        success: true,
        message: 'Your enquiry has been successfully delivered to our reservations desk at ayorasuites@gmail.com!'
      };
    } else {
      return {
        success: false,
        message: data.message || 'Submission failed. Please try again or connect via WhatsApp.'
      };
    }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Network error during submission';
    return {
      success: false,
      message: errorMessage
    };
  }
};
