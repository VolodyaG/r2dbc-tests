var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12568",
        "ok": "12471",
        "ko": "97"
    },
    "minResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59270",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "2193",
        "ok": "2108",
        "ko": "13093"
    },
    "standardDeviation": {
        "total": "4474",
        "ok": "4256",
        "ko": "12045"
    },
    "percentiles1": {
        "total": "1232",
        "ok": "1229",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "1645",
        "ok": "1631",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "6384",
        "ok": "5910",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "21474",
        "ok": "21360",
        "ko": "60000"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1824,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3984,
    "percentage": 32
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6663,
    "percentage": 53
},
    "group4": {
    "name": "failed",
    "count": 97,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "74.81",
        "ok": "74.232",
        "ko": "0.577"
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
        "total": "12568",
        "ok": "12471",
        "ko": "97"
    },
    "minResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59270",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "2193",
        "ok": "2108",
        "ko": "13093"
    },
    "standardDeviation": {
        "total": "4474",
        "ok": "4256",
        "ko": "12045"
    },
    "percentiles1": {
        "total": "1232",
        "ok": "1229",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "1645",
        "ok": "1631",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "6384",
        "ok": "5910",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "21474",
        "ok": "21360",
        "ko": "60000"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1824,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3984,
    "percentage": 32
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6663,
    "percentage": 53
},
    "group4": {
    "name": "failed",
    "count": 97,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "74.81",
        "ok": "74.232",
        "ko": "0.577"
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
