 /*
 * main.c
 *
 *  Created on: 2012-8-2
 *      Author: root
 */

//ע������:
//        	 	1 ����ʬ����
//				2 ����ʱ����(Ҫ��20�벻���¾��˳�:a.select(�첽IO),b.alarm,c IO��·����)
//				3 ����������Ŀ(ͳ������������): a ����ȫ�ֱ��� (����ʵ��)  b ����ȴ漼��

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "http_server.h"


int main(int argc, char* argv[]) {
  int port = 8080;
  if (argc >= 2){
	port = atoi(argv[1]);
  }
  start_server(port);
	return 0;
};

