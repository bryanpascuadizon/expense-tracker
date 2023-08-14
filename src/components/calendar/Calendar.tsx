import CalendarItem from "./CalendarItem";
import { fetchUserExepensesByMonth, makeCalendar } from "@/lib/ExpenseActions";
import moment from "moment";
import { MONTHS } from "@/utils/constants";
import { useQuery } from "react-query";
import { ExpenseType } from "@/utils/types";
import { useEffect, useState } from "react";
import CalendarItemDialog from "./CalendarItemDialog";

const Calendar = () => {
  const calendar = makeCalendar();
  const calendarMonth = MONTHS[moment(new Date()).month()];
  const numberOfDaysInMonth = moment(new Date()).daysInMonth();
  const calendarYear = moment(new Date()).year();

  const { data, isLoading, refetch } = useQuery(
    "calendar_expenses_list",
    async () => {
      const expenseList: ExpenseType[] = await fetchUserExepensesByMonth(
        calendarMonth,
        numberOfDaysInMonth,
        calendarYear
      );
      return expenseList;
    }
  );
  const [calendarItemExpenseList, setCalendarItemExpenseList] = useState<
    ExpenseType[]
  >([]);
  const [currentDate, setCurrentDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const getExpenseListFromCalendarItem = async (
    expenseList: ExpenseType[],
    day: number
  ) => {
    setCalendarItemExpenseList(expenseList);
    setCurrentDate(`${calendarYear}-${calendarMonth}-${day}`);
    setIsOpen(!isOpen);
  };

  const handleCalendarItemClose = () => {
    setIsOpen(!isOpen);
  };

  return !isLoading ? (
    <>
      {data && calendar && calendar.length > 0 ? (
        <>
          <div className="text-xl mb-3">{`${calendarMonth} ${calendarYear}`}</div>
          <div
            key={``}
            className="rounded-md bg-600 w-full min-h-[130px] p-2 grid xxxl:grid-cols-7 xxl:grid-cols-5 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2"
          >
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
                  getExpenseListFromCalendarItem={
                    getExpenseListFromCalendarItem
                  }
                />
              </>
            ))}
          </div>
          <CalendarItemDialog
            isOpen={isOpen}
            expenses={data.filter(
              (expense: ExpenseType) =>
                moment(expense.dateOfTransaction).format("YYYY-MM-DD") ===
                moment(`${currentDate}`).format("YYYY-MM-DD")
            )}
            calendarCurrentDate={currentDate}
            handleCalendarItemClose={handleCalendarItemClose}
            refetch={refetch}
          />
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
