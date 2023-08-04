import { useCalendarQuery } from "@/utils/hooks/expense";
import CalendarItem from "./CalendarItem";

const Calendar = () => {
  const { data } = useCalendarQuery();

  return (
    <>
      {data && data.length > 0 ? (
        <>
          <div className="rounded-md bg-600 w-full min-h-[130px] p-2 grid xxxl:grid-cols-7 xxl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3  xs:grid-cols-2 gap-2">
            {data.map((dayItem: number) => (
              <>
                <CalendarItem day={dayItem} />
              </>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Calendar;
