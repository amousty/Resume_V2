$('document').ready(function () {
    customScripts.init();
    HELPER.setResumeVersion('currentResumeVersion', 6);
    GITHUB.getAPIResult();
});
