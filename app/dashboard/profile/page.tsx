import DashboardLayout from '@/components/layout/DashboardLayout';
import ProfileDashboard from '@/components/profile/ProfileDashboard';

export const metadata = {
  title: 'Profile - UtopiaHire',
  description: 'View and manage your profile information',
};

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <ProfileDashboard />
    </DashboardLayout>
  );
}
