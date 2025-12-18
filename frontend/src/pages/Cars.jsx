import { useApi } from '../hooks/useApi'
import { formatCurrency } from '../utils/helpers'

const Cars = () => {
  const { data: cars, loading, error } = useApi('/cars')

  if (loading) return <div className="text-center py-8">Loading cars...</div>
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Cars</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars?.map((car) => (
          <div key={car._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Car Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {car.year} {car.make} {car.model}
              </h3>
              <p className="text-gray-600 mb-2">Category: {car.category}</p>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                {formatCurrency(car.pricePerDay)}/day
              </p>
              {car.features && car.features.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {car.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <button
                className={`w-full py-2 px-4 rounded font-medium ${
                  car.availability
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!car.availability}
              >
                {car.availability ? 'Book Now' : 'Not Available'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cars