import PaymentMonitoring from '../../../views/PaymentMonitoring';
import SuperAdminRoute from '../../../components/SuperAdminRoute';

export default function PaymentsPage() {
  return (
    <SuperAdminRoute>
      <PaymentMonitoring />
    </SuperAdminRoute>
  );
}
