$('document').ready(function () {
    customScripts.init();
    HELPER.setResumeVersion('currentResumeVersion', 5);
    GITHUB.getAPIResult();
});
