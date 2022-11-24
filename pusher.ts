import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
  appId: '1512996',
  key: '4e36f9d5aa02216534f9',
  secret: 'cfbef82cdb447201c348',
  cluster: 'eu',
  useTLS: true,
});
export const clientPusher = new ClientPusher('4e36f9d5aa02216534f9', {
  cluster: 'eu',
  forceTLS: true,
});
