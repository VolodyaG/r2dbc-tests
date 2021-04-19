package bookstore

import scala.util.Random

object TestHelper {
  private val random = Random

  def randomAuthorId(): Int = random.nextInt(30000)
}
