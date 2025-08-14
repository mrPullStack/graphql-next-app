import UserProfile from '@/components/UserProfile';

export default function Page() {
  // Replace with a real ID existing in your API
  return (
    <main className="mx-auto max-w-xl p-6">
      <h2 className="mb-4 text-2xl font-bold">User</h2>
      <UserProfile userId="1" />
    </main>
  );
}
