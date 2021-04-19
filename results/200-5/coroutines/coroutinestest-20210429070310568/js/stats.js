var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12356",
        "ok": "12289",
        "ko": "67"
    },
    "minResponseTime": {
        "total": "58",
        "ok": "58",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "50578",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "1946",
        "ok": "1849",
        "ko": "19702"
    },
    "standardDeviation": {
        "total": "3635",
        "ok": "3070",
        "ko": "19773"
    },
    "percentiles1": {
        "total": "1176",
        "ok": "1173",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "1572",
        "ok": "1562",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "6533",
        "ok": "5889",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "19586",
        "ok": "18507",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3513,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2888,
    "percentage": 23
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5888,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 67,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "98.848",
        "ok": "98.312",
        "ko": "0.536"
    }
},
contents: {
"req_get-random-auth-60dd5": {
        type: "REQUEST",
        name: "Get Random Author",
path: "Get Random Author",
pathFormatted: "req_get-random-auth-60dd5",
stats: {
    "name": "Get Random Author",
    "numberOfRequests": {
        "total": "12356",
        "ok": "12289",
        "ko": "67"
    },
    "minResponseTime": {
        "total": "58",
        "ok": "58",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "50578",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "1946",
        "ok": "1849",
        "ko": "19702"
    },
    "standardDeviation": {
        "total": "3635",
        "ok": "3070",
        "ko": "19773"
    },
    "percentiles1": {
        "total": "1176",
        "ok": "1173",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "1572",
        "ok": "1562",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "6533",
        "ok": "5889",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "19586",
        "ok": "18507",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3513,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2888,
    "percentage": 23
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5888,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 67,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "98.848",
        "ok": "98.312",
        "ko": "0.536"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
