### Environment
DO droplet with 2GB RAM with Postgres Database.

JVM Options:
```
-XX:+UseG1GC
-XX:MaxGCPauseMillis=100
-XX:MaxMetaspaceSize=128m
-XX:ReservedCodeCacheSize=128m
-Xms256m
-Xmx512g
```

Dataset: More than one million records

Test: Select some author by random id

Test execution time: 2m

## Results
#### Code Readability:
| Framework   	| Clean Code                                        |
|------------	|-----------------------------                      |
| JDBC       	| Yes  	                                            |
| Reactive   	| No (Hell of chains, nested callbacks)  	        |
| Coroutines 	| Yes (same as jdbc + suspend)                      |

#### Concurrent Users: 50; Connection Pool: 2
|            	| Total Requests 	| Req/s   	| MIn 	| 75%  	| 95%   	| 99%   	| Max       | Mean 	| Jvm Thread |
|------------	|----------------	|---------	|-----	|------	|-------	|-------	|-------	|------	|----------- |
| JDBC       	| 13261          	| 106.944 	| 51  	| 311  	| 724   	| 11738 	| 18743 	| 452  	| 47  	     |
| Reactive   	| 14235          	| 114.798 	| 50  	| 330  	| 907   	| 7171  	| 15359 	| 423  	| 22  	     |
| Coroutines 	| 14136          	| 114.927 	| 49  	| 352  	| 978   	| 6952  	| 16923 	| 424  	| 22  	     |
#### Concurrent Users: 50; Connection Pool: 5
|            	| Total Requests 	| Req/s   	| MIn 	| 75%  	| 95%   	| 99%   	| Max       | Mean 	| Jvm Thread |
|------------	|----------------	|---------	|-----	|------	|-------	|-------	|-------	|------	|----------- |
| JDBC       	| 13090          	| 103.889 	| 49  	| 315  	| 836   	| 11618 	| 18834 	| 461  	| 42  	     |
| Reactive   	| 14429          	| 117.309 	| 52  	| 317  	| 1056  	| 7092  	| 15501 	| 416  	| 22  	     |
| Coroutines 	| 14265          	| 115.04  	| 45  	| 321  	| 1026  	| 7382  	| 12149 	| 424  	| 22  	     |
#### Concurrent Users: 50; Connection Pool: 12
|            	| Total Requests 	| Req/s   	| MIn 	| 75%  	| 95%   	| 99%   	| Max       | Mean 	| Jvm Thread |
|------------	|----------------	|---------	|-----	|------	|-------	|-------	|-------	|------	|----------- |
| JDBC       	| 13444          	| 104.217 	| 50  	| 340  	| 949   	| 11035 	| 19969 	| 453  	| 44  	     |
| Reactive   	| 14195          	| 117.314 	| 48  	| 306  	| 880   	| 7266  	| 14587 	| 421  	| 22  	     |
| Coroutines 	| 14688          	| 118.452 	| 49  	| 329  	| 870   	| 7309  	| 12518 	| 409  	| 22  	     |
#### Concurrent Users: 50; Connection Pool: 45
|            	| Total Requests 	| Req/s   	| MIn 	| 75%  	| 95%   	| 99%   	| Max       | Mean 	| Jvm Thread |
|------------	|----------------	|---------	|-----	|------	|-------	|-------	|-------	|------	|----------- |
| JDBC       	| 13025          	| 100.969 	| 52  	| 324  	| 815   	| 11517 	| 27270 	| 468  	| 43  	     |
| Reactive   	| 14183          	| 115.309 	| 52  	| 338  	| 1018  	| 7043  	| 15343 	| 424  	| 22  	     |
| Coroutines 	| 14772          	| 119.129 	| 53  	| 348  	| 588   	| 7055  	| 13711 	| 407  	| 22  	     |
#### Concurrent Users: 200; Connection Pool: 5
|            	| Total Requests 	| Req/s   	| MIn 	| 75%  	| 95%   	| 99%   	| Max       | Mean 	| Fails (connection timed out) 	| Jvm Thread |
|------------	|----------------	|---------	|-----	|------	|-------	|-------	|-------	|------	|------------------------------	|----------- |
| JDBC       	| 11996          	| 89.163  	| 63  	| 1565 	| 8973  	| 17035 	| 45109 	| 2022 	| 41                           	| 220  	     |
| Reactive   	| 7809           	| 48.545  	| 51  	| 2055 	| 10125 	| 60000 	| 60002 	| 3307 	| 201                          	| 21  	     |
| Coroutines 	| 12289          	| 98.848  	| 58  	| 1572 	| 6533  	| 19586 	| 60001 	| 1946 	| 67                           	| 22  	     |
#### Concurrent Users: 200; Connection Pool: 45
|            	| Total Requests 	| Req/s   	| MIn 	| 75%  	| 95%   	| 99%   	| Max       | Mean 	| Fails (connection timed out) 	| Jvm Thread |
|------------	|----------------	|---------	|-----	|------	|-------	|-------	|-------	|------	|------------------------------	|----------- |
| JDBC       	| 12804          	| 94.235  	| 52  	| 1318 	| 7556  	| 20997 	| 51685 	| 1897 	| 12                           	| 220  	     |
| Reactive   	| 12471          	| 74.81   	| 49  	| 1645 	| 6384  	| 21474 	| 60001 	| 2193 	| 97                           	| 26  	     |
| Coroutines 	| 13529          	| 102.53  	| 55  	| 1585 	| 5747  	| 11388 	| 22626 	| 1799 	| 5                            	| 27  	     |
