### JMH
`.gradlew cleam jmh`
Results located here `build/results/jmh/results.json`
and can be visualized via https://jmh.morethan.io/

### Gatling
```shell
cd gatling
./gradlew clean gatlingRun-bookstore.JdbcTest
./gradlew clean gatlingRun-bookstore.CoroutinesTest
./gradlew clean gatlingRun-bookstore.ReactiveTest
```


### Jvm Configuration
```shell
-XX:+UseG1GC -XX:MaxGCPauseMillis=100 -XX:MaxMetaspaceSize=128m -XX:ReservedCodeCacheSize=128m -Xms256m -Xmx512g ```