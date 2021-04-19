package bookstore

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._

abstract class BaseTest extends Simulation {
  val baseUrl: String
  val duringSeconds: Integer = 120
  val concurrentUsers: Integer = 200

  def serviceUrl(): String = s"http://159.65.201.199:8080$baseUrl"

  def getAuthorByRandomId(): ScenarioBuilder =
    scenario(s"Load testing of $baseUrl API")
      .exec(
        http("Get Random Author")
          .get(s"/authors/${TestHelper.randomAuthorId()}")
          .check(status.is(200))
      )

  def run(): Unit = {
    setUp(getAuthorByRandomId().inject(constantConcurrentUsers(concurrentUsers) during (duringSeconds))
      .protocols(http.baseUrl(serviceUrl())))
      .maxDuration(1800)
      .assertions(global.responseTime.max.lt(20000), global.successfulRequests.percent.gt(99))
  }
}












