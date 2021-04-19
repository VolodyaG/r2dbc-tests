var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "14429",
        "ok": "14429",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "52",
        "ok": "52",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15501",
        "ok": "15501",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "416",
        "ok": "416",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1009",
        "ok": "1009",
        "ko": "-"
    },
    "percentiles1": {
        "total": "235",
        "ok": "235",
        "ko": "-"
    },
    "percentiles2": {
        "total": "317",
        "ok": "317",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1056",
        "ok": "1056",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7092",
        "ok": "7092",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13637,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 256,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 536,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "117.309",
        "ok": "117.309",
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
        "total": "14429",
        "ok": "14429",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "52",
        "ok": "52",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15501",
        "ok": "15501",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "416",
        "ok": "416",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1009",
        "ok": "1009",
        "ko": "-"
    },
    "percentiles1": {
        "total": "235",
        "ok": "235",
        "ko": "-"
    },
    "percentiles2": {
        "total": "317",
        "ok": "317",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1056",
        "ok": "1056",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7092",
        "ok": "7092",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13637,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 256,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 536,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "117.309",
        "ok": "117.309",
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
