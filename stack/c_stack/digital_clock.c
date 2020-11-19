/*
 * @Author: your name
 * @Date: 2020-11-07 18:18:52
 * @LastEditTime: 2020-11-12 17:07:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \caketi\stack\c_stack\digital_clock.c
 */    
#include<stdio.h>
#include<conio.h>
void main()
{
	int h=0,m=0,s=0;
	clrscr();
	printf("Please enter a time format in HH:MM:SS");
	scanf("%d%d%d",&h,&m,&s);
	start:
	for(h;h<24;h++)
	{
		for(m;m<60;m++)
		{
			for(s;s<60;s++)
			{
				clrscr();
				printf("\n\n\t\t\t%d:%d:%d",h,m,s);
				if(h<12)
				{
					printf(" AM");
				}
				else
				{
					printf(" PM");
				}
				printf("\n\n\t\t\tSunday 18 Nov 2018");
				for(double i=0;i<3619999;i++)
				  	 i++;
				 
			}
			s=0;
		}
		m=0;

	}
	h=0;
	goto start;
getch();
}