import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "2.4.4"
    id("io.spring.dependency-management") version "1.0.11.RELEASE"
    id("me.champeau.jmh") version "0.6.3"
    id("com.github.johnrengelman.shadow") version "6.1.0"
    id("com.google.cloud.tools.jib") version "3.0.0"
    kotlin("jvm") version "1.4.31"
    kotlin("plugin.spring") version "1.4.31"
}

group = "com.volodya"
version = "0.0.1"
java.sourceCompatibility = JavaVersion.VERSION_11
java.targetCompatibility = JavaVersion.VERSION_11

repositories {
    mavenCentral()
    jcenter()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-jdbc")
    implementation("org.ufoss.kotysa:kotysa-spring-jdbc:0.2.1")

    implementation("org.springdoc:springdoc-openapi-ui:1.5.6")
    implementation("org.springdoc:springdoc-openapi-kotlin:1.5.6")

    runtimeOnly("org.postgresql:postgresql")

    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")

    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core")

    testImplementation("org.springframework.boot:spring-boot-starter-test")
}
tasks {
    withType<KotlinCompile> {
        kotlinOptions {
            freeCompilerArgs = listOf("-Xjsr305=strict")
            jvmTarget = "11"
        }
    }
    test {
        useJUnitPlatform()
    }

    jmh {
        fork.set(0)
        jvmArgs.set(
            listOf(
                "-XX:+UseG1GC",
                "-XX:MaxGCPauseMillis=100",
                "-XX:MaxMetaspaceSize=128m",
                "-XX:ReservedCodeCacheSize=128m",
                "-Xms256m",
                "-Xmx512g"
            )
        )
        resultFormat.set("JSON")
        resultsFile.set(buildDir.resolve("reports/jmh/resutls.json"))
        profilers.set(listOf("gc", "stack"))
    }

    jib {
        to {
            image = "volodya/bookstore:jdbc"
        }
        container {
            jvmFlags = listOf(
                "-XX:+UseG1GC",
                "-XX:MaxGCPauseMillis=100",
                "-XX:MaxMetaspaceSize=128m",
                "-XX:ReservedCodeCacheSize=128m",
                "-Xms256m",
                "-Xmx512g",
                // Visual VM debug
                "-Dcom.sun.management.jmxremote",
                "-Dcom.sun.management.jmxremote.port=7765",
                "-Dcom.sun.management.jmxremote.rmi.port=7765",
                "-Djava.rmi.server.hostname=159.65.201.199",
                "-Dcom.sun.management.jmxremote.authenticate=false",
                "-Dcom.sun.management.jmxremote.ssl=false"
            )
        }
    }
}