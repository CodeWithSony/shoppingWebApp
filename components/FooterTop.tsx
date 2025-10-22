import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface ContactItemData {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}
const data: ContactItemData[] = [
  {
    title: "Visit us",
    subTitle: "New Orlean, USA",
    icon: (
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors"></MapPin>
    ),
  },
  {
    title: "Call Us",
    subTitle: "+12 958 648 235",
    icon: (
      <Phone className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors"></Phone>
    ),
  },
  {
    title: "Working hours",
    subTitle: "Mon - Sun / 9:00 AM - 8:00 PM",
    icon: (
      <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors"></Clock>
    ),
  },
  {
    title: "Email Us",
    subTitle: "sahu.priyanka2122@gmail.com",
    icon: (
      <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors"></Mail>
    ),
  },
];
const FooterTop = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  sm:grid-cols-2 lg:grid-cols-3 border-b ">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors"
        >
          {item?.icon}
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-black">
              {" "}
              {item?.title}{" "}
            </h3>
            <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900">
              {" "}
              {item?.subTitle}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
