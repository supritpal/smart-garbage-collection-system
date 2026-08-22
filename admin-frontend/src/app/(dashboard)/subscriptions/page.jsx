import SubscriptionPlanManagement from '../../../views/SubscriptionPlanManagement';
import SuperAdminRoute from '../../../components/SuperAdminRoute';

export default function SubscriptionsPage() {
  return (
    <SuperAdminRoute>
      <SubscriptionPlanManagement />
    </SuperAdminRoute>
  );
}
