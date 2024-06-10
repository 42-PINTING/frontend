import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import styles from '@/_globalStyles/SignInButton.module.scss';
import { profileState } from '@/_globalAtoms/profile';
import { cookies } from 'next/headers';

export default function SignInButton() {
  const profile = useRecoilValue(profileState);

  if (!profile.email) {
    return (
      <Link href='/signIn' className={styles.signIn}>
        로그인
      </Link>
    );
  }

  const handleLogout = () => {
    cookies().delete('pintingAccessToken');
    window.location.reload();
  };

  return <button onClick={handleLogout}>로그아웃</button>;
}
