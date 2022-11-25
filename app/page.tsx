import { Message } from '../typings';
import ChatInput from './ChatInput';
import Header from './Header';
import MessageList from './MessageList';

async function HomePage() {
  const data = await fetch(
    `${process.env.VERCEL_URL || 'http:localhost:3000'}/api/getMessages`
  ).then((res) => res.json());
  const messages: Message[] = data.messages;
  return (
    <main>
      <Header />
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  );
}

export default HomePage;
