import CalendarItem from "./CalendarItem";
import { fetchUserExepensesByMonth, makeCalendar } from "@/lib/ExpenseActions";
import moment from "moment";
import { MONTHS } from "@/utils/constants";
import { useQuery } from "react-query";
import { ExpenseType } from "@/utils/types";
import { useEffect, useState } from "react";
import CalendarItemDialog from "./CalendarItemDialog";

const Calendar = () => {
  const calendar = makeCalendar("August", "2023");
  const calendarMonth = MONTHS[moment(new Date()).month()];
  const numberOfDaysInMonth = moment(new Date()).daysInMonth();
  const calendarYear = moment(new Date()).year();

  const [calendarTest, setCalendarTest] = useState<number[]>([]);
  const [calendarMonthTest, setCalendarMonthTest] = useState("");
  const [calendarYearTest, setCalendarYearTest] = useState(0);
  const [numberOfDaysInMonthTest, setNumberOfDaysInMonthTest] = useState(0);

  const { data, isLoading, refetch } = useQuery(
    "calendar_expenses_list",
    async () => {
      const expenseList: ExpenseType[] = await fetchUserExepensesByMonth(
        calendarMonth,
        numberOfDaysInMonth,
        calendarYear
      );
      console.log("expense list data: ", expenseList)
      return expenseList;
    }
  );
  const [currentDate, setCurrentDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const handleCalendarDialog = async (day: number) => {
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
          <div className="text-xl mb-5 mt-7">{`${calendarMonth} ${calendarYear}`}</div>
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
                  handleCalendarDialog={handleCalendarDialog}
                />
              </>
            ))}
          </div>
          <CalendarItemDialog
            isOpen={isOpen}
            expenses={data.filter(
              (expense: ExpenseType) =>
                moment(`${expense.dateOfTransaction}`).format("YYYY-MM-DD") ===
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
