import axios from 'axios';

export const subscribeMailgun = async ({ email }: { email: string }) => {
  const { data } = await axios.post('/api/mail', { email });
  return data;
};
