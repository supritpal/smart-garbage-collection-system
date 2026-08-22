import SupportQueries from '../../../views/SupportQueries';
import SuperAdminRoute from '../../../components/SuperAdminRoute';

export default function SupportPage() {
  return (
    <SuperAdminRoute>
      <SupportQueries />
    </SuperAdminRoute>
  );
}
