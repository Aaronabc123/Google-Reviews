import { SignedOut } from '@clerk/nextjs';
import Home from './pages/Home'

export default async function Page () {

  return (
    <div>
      <SignedOut>
        <Home />
      </SignedOut>
    </div>
  );
}
