var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "14772",
        "ok": "14772",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13711",
        "ok": "13711",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "407",
        "ok": "407",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "911",
        "ok": "911",
        "ko": "-"
    },
    "percentiles1": {
        "total": "273",
        "ok": "273",
        "ko": "-"
    },
    "percentiles2": {
        "total": "348",
        "ok": "348",
        "ko": "-"
    },
    "percentiles3": {
        "total": "588",
        "ok": "588",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7055",
        "ok": "7055",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14135,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 169,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 468,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "119.129",
        "ok": "119.129",
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
        "total": "14772",
        "ok": "14772",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13711",
        "ok": "13711",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "407",
        "ok": "407",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "911",
        "ok": "911",
        "ko": "-"
    },
    "percentiles1": {
        "total": "273",
        "ok": "273",
        "ko": "-"
    },
    "percentiles2": {
        "total": "348",
        "ok": "348",
        "ko": "-"
    },
    "percentiles3": {
        "total": "588",
        "ok": "588",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7055",
        "ok": "7055",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14135,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 169,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 468,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "119.129",
        "ok": "119.129",
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
