
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className=''>
       <div className='min-h-screen mt-16 w-full flex justify-center items-center'>
          <SignIn />
      </div>
    </div>
  );
}
