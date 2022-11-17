import ChatInput from './ChatInput';
import Header from './Header';
import MessageList from './MessageList';

function HomePage() {
  return (
    <main>
      <Header />
      <MessageList />
      <ChatInput />
    </main>
  );
}

export default HomePage;
