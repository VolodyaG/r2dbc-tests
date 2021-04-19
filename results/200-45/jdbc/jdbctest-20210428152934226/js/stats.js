var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12816",
        "ok": "12804",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "52",
        "ok": "52",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "51685",
        "ok": "51685",
        "ko": "10002"
    },
    "meanResponseTime": {
        "total": "1897",
        "ok": "1889",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "3683",
        "ok": "3677",
        "ko": "1"
    },
    "percentiles1": {
        "total": "903",
        "ok": "902",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "1318",
        "ok": "1315",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "7556",
        "ok": "7362",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "20997",
        "ok": "21002",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5344,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3862,
    "percentage": 30
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3598,
    "percentage": 28
},
    "group4": {
    "name": "failed",
    "count": 12,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "94.235",
        "ok": "94.147",
        "ko": "0.088"
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
        "total": "12816",
        "ok": "12804",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "52",
        "ok": "52",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "51685",
        "ok": "51685",
        "ko": "10002"
    },
    "meanResponseTime": {
        "total": "1897",
        "ok": "1889",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "3683",
        "ok": "3677",
        "ko": "1"
    },
    "percentiles1": {
        "total": "903",
        "ok": "902",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "1318",
        "ok": "1315",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "7536",
        "ok": "7362",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "20997",
        "ok": "21002",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5344,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3862,
    "percentage": 30
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3598,
    "percentage": 28
},
    "group4": {
    "name": "failed",
    "count": 12,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "94.235",
        "ok": "94.147",
        "ko": "0.088"
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
