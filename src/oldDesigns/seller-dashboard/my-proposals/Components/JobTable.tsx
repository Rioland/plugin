// app/components/JobTable.tsx or wherever you want it
import Image from "next/image";

const jobs = [
  {
    id: 1,
    title: "Food Delivery Mobile App",
    location: "London, UK",
    date: "April 01, 2023",
    received: 1,
    rate: "$100 - $150",
    image: "/images/team/client-1.png",
  },
  {
    id: 2,
    title: "Video animator to bring some illustrations to life",
    location: "London, UK",
    date: "April 01, 2023",
    received: 1,
    rate: "$100 - $150",
    image: "/images/team/client-2.png",
  },
  {
    id: 3,
    title: "Swift / SwiftUI Developer for B2B iOS apps",
    location: "London, UK",
    date: "April 01, 2023",
    received: 1,
    rate: "$100 - $150",
    image: "/images/team/client-3.png",
  },
  {
    id: 4,
    title: "English content writer for Fintech",
    location: "London, UK",
    date: "April 01, 2023",
    received: 1,
    rate: "$100 - $150",
    image: "/images/team/client-4.png",
  },
  {
    id: 5,
    title: "Full-stack Developer to help us to build our",
    location: "London, UK",
    date: "April 01, 2023",
    received: 1,
    rate: "$100 - $150",
    image: "/images/team/client-5.png",
  },
  {
    id: 6,
    title: "Looking for team members for web agency",
    location: "London, UK",
    date: "April 01, 2023",
    received: 1,
    rate: "$100 - $150",
    image: "/images/team/client-6.png",
  },
  {
    id: 7,
    title: "Food Delivery Mobile App",
    location: "London, UK",
    date: "April 01, 2023",
    received: 1,
    rate: "$100 - $150",
    image: "/images/team/client-7.png",
  },
];

export default function JobTable() {
  return (
    <div className="w-full px-4 py-6">
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Cost / Delivery</th>
              <th className="px-6 py-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600">
            {jobs.map((job) => (
              <tr key={job.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 relative rounded-full overflow-hidden">
                      <Image
                        src={job.image}
                        alt={job.title}
                        layout="fill"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-1">
                        {job.title}
                      </h5>
                      <p className="text-xs flex gap-2 flex-wrap">
                        <span className="flex items-center gap-1">
                          <i className="flaticon-place text-blue-500" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 border-l border-gray-300 pl-2">
                          <i className="flaticon-30-days text-blue-500" />
                          {job.date}
                        </span>
                        <span className="flex items-center gap-1 border-l border-gray-300 pl-2">
                          <i className="flaticon-contract text-blue-500" />
                          {job.received} Received
                        </span>
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <h5 className="font-semibold">{job.rate}</h5>
                  <span className="text-xs text-gray-500">Hourly Rate</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <button
                      title="Edit"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <i className="flaticon-pencil" />
                    </button>
                    <button
                      title="Delete"
                      className="text-red-600 hover:text-red-800"
                    >
                      <i className="flaticon-delete" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination - optional */}
        <div className="flex justify-center items-center py-4">
          <ul className="flex space-x-2 text-sm">
            <li>
              <a
                href="#"
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                &lt;
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                &gt;
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
