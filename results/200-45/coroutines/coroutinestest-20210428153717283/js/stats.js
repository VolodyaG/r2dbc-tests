var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "13534",
        "ok": "13529",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "55",
        "ok": "55",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "22626",
        "ok": "22626",
        "ko": "10001"
    },
    "meanResponseTime": {
        "total": "1799",
        "ok": "1796",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "2027",
        "ok": "2021",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1290",
        "ok": "1290",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "1585",
        "ok": "1584",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "5747",
        "ok": "5706",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "11388",
        "ok": "11390",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1795,
    "percentage": 13
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3849,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7885,
    "percentage": 58
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "102.53",
        "ok": "102.492",
        "ko": "0.038"
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
        "total": "13534",
        "ok": "13529",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "55",
        "ok": "55",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "22626",
        "ok": "22626",
        "ko": "10001"
    },
    "meanResponseTime": {
        "total": "1799",
        "ok": "1796",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "2027",
        "ok": "2021",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1290",
        "ok": "1290",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "1585",
        "ok": "1584",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "5747",
        "ok": "5706",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "11388",
        "ok": "11390",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1795,
    "percentage": 13
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3849,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7885,
    "percentage": 58
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "102.53",
        "ok": "102.492",
        "ko": "0.038"
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
