import { useCalendarQuery } from "@/utils/hooks/expense";
import CalendarItem from "./CalendarItem";
import { fetchUserExepensesByMonth, makeCalendar } from "@/lib/ExpenseActions";
import moment from "moment";
import { MONTHS } from "@/utils/constants";
import { useQuery } from "react-query";
import { ExpenseType } from "@/utils/types";

const Calendar = () => {
  const calendar = makeCalendar();
  const calendarMonth = MONTHS[moment(new Date()).month()];
  const numberOfDaysInMonth = moment(new Date()).daysInMonth();
  const calendarYear = moment(new Date()).year();

  const { data, isLoading } = useQuery([], async () => {
    const expenseList: ExpenseType[] = await fetchUserExepensesByMonth(
      calendarMonth,
      numberOfDaysInMonth,
      calendarYear
    );
    return expenseList;
  });

  return !isLoading ? (
    <>
      {data && data.length > 0 && calendar && calendar.length > 0 ? (
        <>
          <div className="text-xl mb-2">{`${calendarMonth} ${calendarYear}`}</div>
          <div
            key={``}
            className="rounded-md bg-600 w-full min-h-[130px] p-2 grid xxxl:grid-cols-7 xxl:grid-cols-5 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2"
          >
            {/* <div
            key={``}
            className="rounded-md bg-600 w-full min-h-[130px] p-2 grid grid-cols-7 gap-2"
          > */}
            {calendar.map((day: number) => (
              <>
                <CalendarItem
                  expenseList={data.filter(
                    (expense: ExpenseType) =>
                      moment(expense.dateOfTransaction).format("MM/DD/YYYY") ===
                      moment(`${calendarMonth} ${day}, ${calendarYear}`).format(
                        "MM/DD/YYYY"
                      )
                  )}
                  month={calendarMonth}
                  day={day}
                  year={calendarYear}
                  key={day}
                />
              </>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  ) : (
    <div>
      <p>Loading Calendar...</p>
    </div>
  );
};

export default Calendar;
