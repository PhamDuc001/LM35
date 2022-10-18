#include <stdio.h>

int Condition (int day, int month, int year)
{
    if ( day <=0 || day > 31)
    {
        printf("Ngay ban nhap khong hop le!! \n");
        return 0;
    }
    else if (month <=0 || month > 12)
    {
        printf("Thang ban nhap khong hop le!! \n");
        return 0;
    }
    else if (year > 2022)
    {
        printf("Nam ban nhap khong hop le!! \n");
        return 0;
    }
    else if ( (month == 4 || month == 6 || month == 9 || month == 11 ) && day > 30 )
    {
        printf("Ngay thang ban nhap khong hop le!! \n");
        return 0;
    }
    else if ( month == 2 && day > 29)
    {
        printf("Ngay thang ban nhap khong hop le!! \n");
        return 0;
    }
    else
    {
        return 1;
    }
}

int CountAge (int day, int month, int year)
{
    int day_now, month_now, year_now;
    printf ("Nhap ngay thang nam hien tai: ");
    scanf("%d %d %d", &day_now, &month_now, &year_now);

    printf ("Ngay thang nam hien tai: %d - %d -%d\n", day_now, month_now, year_now);
    
    if (month_now > month)
    {
        return year_now - year;
    }
    else if (month_now == month && day_now > day)
    {
        return year_now - year;
    }
    else if ( (year_now == year && month_now == month && day_now < day) || (year_now == year && month_now < month) )
    {
        printf("Ban chua duoc sinh ra \n");
    }
    else
    {
        return year_now - year - 1;
    }
}

int main()
{
    int day, month, year;
    do
    {
        printf ("Nhap ngay sinh cua ban: ");
        scanf("%d", &day);
        printf ("Nhap thang sinh cua ban: ");
        scanf("%d", &month);
        printf ("Nhap nam sinh cua ban: ");
        scanf("%d", &year);
    } while (Condition (day, month, year) == 0);

    printf ("Ngay thang nam sinh cua ban la: %d - %d - %d\n", day, month, year);
    
    printf ("So tuoi cua ban hien tai la: %d\n ",CountAge(day,month,year));
    
}