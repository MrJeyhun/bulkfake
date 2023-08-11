import { AppContext } from "@app/pages/App";
import { TableProps } from "@app/types/types";
import { useContext, useEffect } from "react";

const Table = (props: TableProps) => {
  const { fakeDatas, handleScroll } = props;
  const { csvData } = useContext<any>(AppContext);

  useEffect(() => {
    csvData.current = fakeDatas;
  }, [fakeDatas]);

  return (
    <div className="flex flex-row h-[95vh]">
      <div
        className="overflow-x-auto overflow-scroll sm:-mx-6 lg:-mx-8"
        onScroll={handleScroll}
      >
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Full name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Phone number
                  </th>
                </tr>
              </thead>
              <tbody>
                {fakeDatas.map((el: any, i) => (
                  <tr
                    key={i}
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                  >
                    <th
                      className="whitespace-nowrap px-6 py-4 font-medium"
                      scope="row"
                    >
                      {i + 1}
                    </th>
                    <td className="whitespace-nowrap px-6 py-4">{el.id}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {el.fullName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {el.address}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{el.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
