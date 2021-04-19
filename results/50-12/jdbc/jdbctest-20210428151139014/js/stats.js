var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "13444",
        "ok": "13444",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "19969",
        "ok": "19969",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "453",
        "ok": "453",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1355",
        "ok": "1355",
        "ko": "-"
    },
    "percentiles1": {
        "total": "256",
        "ok": "256",
        "ko": "-"
    },
    "percentiles2": {
        "total": "340",
        "ok": "340",
        "ko": "-"
    },
    "percentiles3": {
        "total": "949",
        "ok": "949",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11035",
        "ok": "11035",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12729,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 304,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 411,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "104.217",
        "ok": "104.217",
        "ko": "-"
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
        "total": "13444",
        "ok": "13444",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "19969",
        "ok": "19969",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "453",
        "ok": "453",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1355",
        "ok": "1355",
        "ko": "-"
    },
    "percentiles1": {
        "total": "256",
        "ok": "256",
        "ko": "-"
    },
    "percentiles2": {
        "total": "340",
        "ok": "340",
        "ko": "-"
    },
    "percentiles3": {
        "total": "949",
        "ok": "949",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11035",
        "ok": "11035",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12729,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 304,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 411,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "104.217",
        "ok": "104.217",
        "ko": "-"
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
