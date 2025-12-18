import { useAuth } from '../context/AuthContext'
import { useApi } from '../hooks/useApi'
import { formatDate, formatCurrency } from '../utils/helpers'

const Dashboard = () => {
  const { user, logout } = useAuth()
  const { data: bookings, loading, error } = useApi('/bookings')

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  if (loading) return <div className="text-center py-8">Loading dashboard...</div>
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}!</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Name:</span> {user?.name}</p>
            <p><span className="font-medium">Email:</span> {user?.email}</p>
            <p><span className="font-medium">Role:</span> {user?.role}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Total Bookings:</span> {bookings?.length || 0}</p>
            <p><span className="font-medium">Active Bookings:</span> {
              bookings?.filter(b => b.status === 'confirmed').length || 0
            }</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">My Bookings</h2>
        </div>
        <div className="p-6">
          {bookings && bookings.length > 0 ? (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking._id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">
                        {booking.car?.year} {booking.car?.make} {booking.car?.model}
                      </h3>
                      <p className="text-gray-600">
                        {formatDate(booking.startDate)} - {formatDate(booking.endDate)}
                      </p>
                      <p className="text-lg font-bold text-blue-600">
                        {formatCurrency(booking.totalAmount)}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800'
                        : booking.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No bookings found.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard