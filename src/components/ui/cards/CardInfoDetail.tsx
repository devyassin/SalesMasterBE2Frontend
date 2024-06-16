type DataItem = {
  label: string;
  value: any;
};

type Props = {
  title: string;
  data: DataItem[];
  customClassStyleForTitle?: string;
};

const CardInfoDetail = ({ title, data, customClassStyleForTitle }: Props) => {
  return (
    <div>
      <h1
        className={`text-3xl font-tajwal pb-4  ${
          customClassStyleForTitle
            ? customClassStyleForTitle
            : "text-light-white-2"
        }`}
      >
        {title}
      </h1>
      <div className="bg-[#2d3748]  overflow-hidden shadow rounded-lg border border-gray-700">
        <div className="px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-700">
            {data.map((item, index) => (
              <div
                key={index}
                className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt className="text-sm font-medium text-[#a0aec0]">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CardInfoDetail;
