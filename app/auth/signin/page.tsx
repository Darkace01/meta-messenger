import { getProviders } from 'next-auth/react';
import Image from 'next/image';
import SignInComponent from './SignInComponent';

async function SignInPage() {
  const providers = await getProviders();
  return (
    <div className='grid justify-center'>
      <div>
        <Image
          className='rounded-full mx-2 object-cover'
          height={700}
          width={700}
          alt='profile picture'
          src='https://links.papareact.com/161'
        />
      </div>
      <SignInComponent providers={providers} />
    </div>
  );
}

export default SignInPage;
