
var camelCaseTokenizer = function (obj) {
    var previous = '';
    return obj.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
        var current = cur.toLowerCase();
        if(acc.length === 0) {
            previous = current;
            return acc.concat(current);
        }
        previous = previous.concat(current);
        return acc.concat([current, previous]);
    }, []);
}
lunr.tokenizer.registerFunction(camelCaseTokenizer, 'camelCaseTokenizer')
var searchModule = function() {
    var idMap = [];
    function y(e) { 
        idMap.push(e); 
    }
    var idx = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('description', { boost: 5 });
        this.field('tags', { boost: 50 });
        this.ref('id');
        this.tokenizer(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
    });
    function a(e) { 
        idx.add(e); 
    }

    a({
        id:0,
        title:"CreateIssueReportSettings",
        content:"CreateIssueReportSettings",
        description:'',
        tags:''
    });

    a({
        id:1,
        title:"FakeRuleDescription",
        content:"FakeRuleDescription",
        description:'',
        tags:''
    });

    a({
        id:2,
        title:"IIssueExtension",
        content:"IIssueExtension",
        description:'',
        tags:''
    });

    a({
        id:3,
        title:"IIssueReportFormat",
        content:"IIssueReportFormat",
        description:'',
        tags:''
    });

    a({
        id:4,
        title:"FakeIssueComponent",
        content:"FakeIssueComponent",
        description:'',
        tags:''
    });

    a({
        id:5,
        title:"FakeRuleUrlResolver",
        content:"FakeRuleUrlResolver",
        description:'',
        tags:''
    });

    a({
        id:6,
        title:"HtmlDxDataGridColumnDescription",
        content:"HtmlDxDataGridColumnDescription",
        description:'',
        tags:''
    });

    a({
        id:7,
        title:"Aliases",
        content:"Aliases",
        description:'',
        tags:''
    });

    a({
        id:8,
        title:"EsLintIssuesAliases",
        content:"EsLintIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:9,
        title:"IssueReportFormat",
        content:"IssueReportFormat",
        description:'',
        tags:''
    });

    a({
        id:10,
        title:"DevExtremeThemeExtensions",
        content:"DevExtremeThemeExtensions",
        description:'',
        tags:''
    });

    a({
        id:11,
        title:"InspectCodeIssuesAliases",
        content:"InspectCodeIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:12,
        title:"MsBuildIssuesAliases",
        content:"MsBuildIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:13,
        title:"FakeConfigurableIssueProvider",
        content:"FakeConfigurableIssueProvider",
        description:'',
        tags:''
    });

    a({
        id:14,
        title:"MarkdownlintIssuesSettings",
        content:"MarkdownlintIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:15,
        title:"TfsPullRequestSettings",
        content:"TfsPullRequestSettings",
        description:'',
        tags:''
    });

    a({
        id:16,
        title:"BaseEsLintLogFileFormat",
        content:"BaseEsLintLogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:17,
        title:"GenericIssueReportFormatAliases",
        content:"GenericIssueReportFormatAliases",
        description:'',
        tags:''
    });

    a({
        id:18,
        title:"BaseIssueProvider",
        content:"BaseIssueProvider",
        description:'',
        tags:''
    });

    a({
        id:19,
        title:"BaseConfigurableIssueProviderFixture",
        content:"BaseConfigurableIssueProviderFixture",
        description:'',
        tags:''
    });

    a({
        id:20,
        title:"ReportColumn",
        content:"ReportColumn",
        description:'',
        tags:''
    });

    a({
        id:21,
        title:"GenericIssueReportFormatSettings",
        content:"GenericIssueReportFormatSettings",
        description:'',
        tags:''
    });

    a({
        id:22,
        title:"BaseMarkdownlintLogFileFormat",
        content:"BaseMarkdownlintLogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:23,
        title:"IssuePriority",
        content:"IssuePriority",
        description:'',
        tags:''
    });

    a({
        id:24,
        title:"PullRequestDiscussionResolution",
        content:"PullRequestDiscussionResolution",
        description:'',
        tags:''
    });

    a({
        id:25,
        title:"FileLinkSettings",
        content:"FileLinkSettings",
        description:'',
        tags:''
    });

    a({
        id:26,
        title:"StringPathExtensions",
        content:"StringPathExtensions",
        description:'',
        tags:''
    });

    a({
        id:27,
        title:"PullRequestDiscussionThread",
        content:"PullRequestDiscussionThread",
        description:'',
        tags:''
    });

    a({
        id:28,
        title:"InspectCodeIssuesSettings",
        content:"InspectCodeIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:29,
        title:"BaseIssueProviderFixture",
        content:"BaseIssueProviderFixture",
        description:'',
        tags:''
    });

    a({
        id:30,
        title:"IPullRequestDiscussionThread",
        content:"IPullRequestDiscussionThread",
        description:'',
        tags:''
    });

    a({
        id:31,
        title:"Issue",
        content:"Issue",
        description:'',
        tags:''
    });

    a({
        id:32,
        title:"IBaseIssueComponent",
        content:"IBaseIssueComponent",
        description:'',
        tags:''
    });

    a({
        id:33,
        title:"MarkdownlintIssuesProvider",
        content:"MarkdownlintIssuesProvider",
        description:'',
        tags:''
    });

    a({
        id:34,
        title:"ByteArrayExtensions",
        content:"ByteArrayExtensions",
        description:'',
        tags:''
    });

    a({
        id:35,
        title:"BaseMultiFormatIssueProviderSettings",
        content:"BaseMultiFormatIssueProviderSettings",
        description:'',
        tags:''
    });

    a({
        id:36,
        title:"BaseIssueComponent",
        content:"BaseIssueComponent",
        description:'',
        tags:''
    });

    a({
        id:37,
        title:"IssuesArgumentChecks",
        content:"IssuesArgumentChecks",
        description:'',
        tags:''
    });

    a({
        id:38,
        title:"FakeMultiFormatIssueProviderSettings",
        content:"FakeMultiFormatIssueProviderSettings",
        description:'',
        tags:''
    });

    a({
        id:39,
        title:"IIssue",
        content:"IIssue",
        description:'',
        tags:''
    });

    a({
        id:40,
        title:"BaseLogFileFormat",
        content:"BaseLogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:41,
        title:"IssueBuilder",
        content:"IssueBuilder",
        description:'',
        tags:''
    });

    a({
        id:42,
        title:"ReadIssuesSettings",
        content:"ReadIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:43,
        title:"ReportingAliasConstants",
        content:"ReportingAliasConstants",
        description:'',
        tags:''
    });

    a({
        id:44,
        title:"ColumnSortOrder",
        content:"ColumnSortOrder",
        description:'',
        tags:''
    });

    a({
        id:45,
        title:"BaseRuleDescription",
        content:"BaseRuleDescription",
        description:'',
        tags:''
    });

    a({
        id:46,
        title:"IssuesReader",
        content:"IssuesReader",
        description:'',
        tags:''
    });

    a({
        id:47,
        title:"ILogFileFormat",
        content:"ILogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:48,
        title:"FakeLogFileFormat",
        content:"FakeLogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:49,
        title:"IIssueProvider",
        content:"IIssueProvider",
        description:'',
        tags:''
    });

    a({
        id:50,
        title:"BaseMsBuildLogFileFormat",
        content:"BaseMsBuildLogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:51,
        title:"FakeIssueProvider",
        content:"FakeIssueProvider",
        description:'',
        tags:''
    });

    a({
        id:52,
        title:"ExceptionAssertExtensions",
        content:"ExceptionAssertExtensions",
        description:'',
        tags:''
    });

    a({
        id:53,
        title:"BaseConfigurableIssueProvider",
        content:"BaseConfigurableIssueProvider",
        description:'',
        tags:''
    });

    a({
        id:54,
        title:"ResourceTempFile",
        content:"ResourceTempFile",
        description:'',
        tags:''
    });

    a({
        id:55,
        title:"PullRequestSystem",
        content:"PullRequestSystem",
        description:'',
        tags:''
    });

    a({
        id:56,
        title:"IPullRequestSystemExtension",
        content:"IPullRequestSystemExtension",
        description:'',
        tags:''
    });

    a({
        id:57,
        title:"MarkdownlintRuleDescription",
        content:"MarkdownlintRuleDescription",
        description:'',
        tags:''
    });

    a({
        id:58,
        title:"EsLintIssuesSettings",
        content:"EsLintIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:59,
        title:"EsLintIssuesProvider",
        content:"EsLintIssuesProvider",
        description:'',
        tags:''
    });

    a({
        id:60,
        title:"MarkdownlintIssuesAliases",
        content:"MarkdownlintIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:61,
        title:"DocFxIssuesAliases",
        content:"DocFxIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:62,
        title:"BaseMultiFormatIssueProviderFixture",
        content:"BaseMultiFormatIssueProviderFixture",
        description:'',
        tags:''
    });

    a({
        id:63,
        title:"ReportIssuesToPullRequestSettings",
        content:"ReportIssuesToPullRequestSettings",
        description:'',
        tags:''
    });

    a({
        id:64,
        title:"PullRequestsAliasConstants",
        content:"PullRequestsAliasConstants",
        description:'',
        tags:''
    });

    a({
        id:65,
        title:"PullRequestIssuesException",
        content:"PullRequestIssuesException",
        description:'',
        tags:''
    });

    a({
        id:66,
        title:"BaseRuleUrlResolver",
        content:"BaseRuleUrlResolver",
        description:'',
        tags:''
    });

    a({
        id:67,
        title:"MsBuildIssuesSettings",
        content:"MsBuildIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:68,
        title:"ITfsCredentials",
        content:"ITfsCredentials",
        description:'',
        tags:''
    });

    a({
        id:69,
        title:"Aliases",
        content:"Aliases",
        description:'',
        tags:''
    });

    a({
        id:70,
        title:"BaseMultiFormatIssueProvider",
        content:"BaseMultiFormatIssueProvider",
        description:'',
        tags:''
    });

    a({
        id:71,
        title:"IssueProviderSettings",
        content:"IssueProviderSettings",
        description:'',
        tags:''
    });

    a({
        id:72,
        title:"Aliases",
        content:"Aliases",
        description:'',
        tags:''
    });

    a({
        id:73,
        title:"TfsPullRequestVote",
        content:"TfsPullRequestVote",
        description:'',
        tags:''
    });

    a({
        id:74,
        title:"GenericIssueReportTemplate",
        content:"GenericIssueReportTemplate",
        description:'',
        tags:''
    });

    a({
        id:75,
        title:"MsBuildRuleDescription",
        content:"MsBuildRuleDescription",
        description:'',
        tags:''
    });

    a({
        id:76,
        title:"IPullRequestSystem",
        content:"IPullRequestSystem",
        description:'',
        tags:''
    });

    a({
        id:77,
        title:"PullRequestDiscussionComment",
        content:"PullRequestDiscussionComment",
        description:'',
        tags:''
    });

    a({
        id:78,
        title:"RepositorySettings",
        content:"RepositorySettings",
        description:'',
        tags:''
    });

    a({
        id:79,
        title:"IssuesAliasConstants",
        content:"IssuesAliasConstants",
        description:'',
        tags:''
    });

    a({
        id:80,
        title:"FakeMultiFormatIssueProvider",
        content:"FakeMultiFormatIssueProvider",
        description:'',
        tags:''
    });

    a({
        id:81,
        title:"ViewBagHelper",
        content:"ViewBagHelper",
        description:'',
        tags:''
    });

    a({
        id:82,
        title:"GenericIssueReportFormatSettingsExtensions",
        content:"GenericIssueReportFormatSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:83,
        title:"MsBuildIssuesAliases",
        content:"MsBuildIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:84,
        title:"IssueCommentFormat",
        content:"IssueCommentFormat",
        description:'',
        tags:''
    });

    a({
        id:85,
        title:"DocFxIssuesSettings",
        content:"DocFxIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:86,
        title:"PullRequestDiscussionStatus",
        content:"PullRequestDiscussionStatus",
        description:'',
        tags:''
    });

    a({
        id:87,
        title:"TfsPullRequestSystemAliases",
        content:"TfsPullRequestSystemAliases",
        description:'',
        tags:''
    });

    a({
        id:88,
        title:"DevExtremeTheme",
        content:"DevExtremeTheme",
        description:'',
        tags:''
    });

    a({
        id:89,
        title:"IPullRequestDiscussionComment",
        content:"IPullRequestDiscussionComment",
        description:'',
        tags:''
    });

    a({
        id:90,
        title:"PullRequestIssueResult",
        content:"PullRequestIssueResult",
        description:'',
        tags:''
    });

    a({
        id:91,
        title:"MsBuildIssuesProvider",
        content:"MsBuildIssuesProvider",
        description:'',
        tags:''
    });

    a({
        id:92,
        title:"HtmlDxDataGridOption",
        content:"HtmlDxDataGridOption",
        description:'',
        tags:''
    });

    a({
        id:93,
        title:"ColumnSortOrderExtensions",
        content:"ColumnSortOrderExtensions",
        description:'',
        tags:''
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/CreateIssueReportSettings',
        title:"CreateIssueReportSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeRuleDescription',
        title:"FakeRuleDescription",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/IIssueExtension',
        title:"IIssueExtension",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/IIssueReportFormat',
        title:"IIssueReportFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeIssueComponent',
        title:"FakeIssueComponent",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeRuleUrlResolver',
        title:"FakeRuleUrlResolver",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/HtmlDxDataGridColumnDescription',
        title:"HtmlDxDataGridColumnDescription",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/Aliases',
        title:"Aliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.EsLint/EsLintIssuesAliases',
        title:"EsLintIssuesAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/IssueReportFormat',
        title:"IssueReportFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/DevExtremeThemeExtensions',
        title:"DevExtremeThemeExtensions",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.InspectCode/InspectCodeIssuesAliases',
        title:"InspectCodeIssuesAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild.LogFileFormat/MsBuildIssuesAliases',
        title:"MsBuildIssuesAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeConfigurableIssueProvider',
        title:"FakeConfigurableIssueProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/MarkdownlintIssuesSettings',
        title:"MarkdownlintIssuesSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests.Tfs/TfsPullRequestSettings',
        title:"TfsPullRequestSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.EsLint/BaseEsLintLogFileFormat',
        title:"BaseEsLintLogFileFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/GenericIssueReportFormatAliases',
        title:"GenericIssueReportFormatAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/BaseIssueProvider',
        title:"BaseIssueProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/BaseConfigurableIssueProviderFixture_2',
        title:"BaseConfigurableIssueProviderFixture<TIssueProvider, TSettings>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/ReportColumn',
        title:"ReportColumn",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/GenericIssueReportFormatSettings',
        title:"GenericIssueReportFormatSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/BaseMarkdownlintLogFileFormat',
        title:"BaseMarkdownlintLogFileFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssuePriority',
        title:"IssuePriority",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestDiscussionResolution',
        title:"PullRequestDiscussionResolution",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/FileLinkSettings',
        title:"FileLinkSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/StringPathExtensions',
        title:"StringPathExtensions",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestDiscussionThread',
        title:"PullRequestDiscussionThread",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.InspectCode/InspectCodeIssuesSettings',
        title:"InspectCodeIssuesSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/BaseIssueProviderFixture_1',
        title:"BaseIssueProviderFixture<T>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/IPullRequestDiscussionThread',
        title:"IPullRequestDiscussionThread",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/Issue',
        title:"Issue",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IBaseIssueComponent_1',
        title:"IBaseIssueComponent<T>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/MarkdownlintIssuesProvider',
        title:"MarkdownlintIssuesProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/ByteArrayExtensions',
        title:"ByteArrayExtensions",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/BaseMultiFormatIssueProviderSettings_2',
        title:"BaseMultiFormatIssueProviderSettings<TIssueProvider, TSettings>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/BaseIssueComponent_1',
        title:"BaseIssueComponent<T>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssuesArgumentChecks',
        title:"IssuesArgumentChecks",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeMultiFormatIssueProviderSettings',
        title:"FakeMultiFormatIssueProviderSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IIssue',
        title:"IIssue",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/BaseLogFileFormat_2',
        title:"BaseLogFileFormat<TIssueProvider, TSettings>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssueBuilder',
        title:"IssueBuilder",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/ReadIssuesSettings',
        title:"ReadIssuesSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/ReportingAliasConstants',
        title:"ReportingAliasConstants",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/ColumnSortOrder',
        title:"ColumnSortOrder",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/BaseRuleDescription',
        title:"BaseRuleDescription",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssuesReader',
        title:"IssuesReader",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/ILogFileFormat_2',
        title:"ILogFileFormat<TIssueProvider, TSettings>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeLogFileFormat',
        title:"FakeLogFileFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IIssueProvider',
        title:"IIssueProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/BaseMsBuildLogFileFormat',
        title:"BaseMsBuildLogFileFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeIssueProvider',
        title:"FakeIssueProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/ExceptionAssertExtensions',
        title:"ExceptionAssertExtensions",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/BaseConfigurableIssueProvider_1',
        title:"BaseConfigurableIssueProvider<T>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/ResourceTempFile',
        title:"ResourceTempFile",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestSystem',
        title:"PullRequestSystem",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/IPullRequestSystemExtension',
        title:"IPullRequestSystemExtension",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/MarkdownlintRuleDescription',
        title:"MarkdownlintRuleDescription",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.EsLint/EsLintIssuesSettings',
        title:"EsLintIssuesSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.EsLint/EsLintIssuesProvider',
        title:"EsLintIssuesProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/MarkdownlintIssuesAliases',
        title:"MarkdownlintIssuesAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.DocFx/DocFxIssuesAliases',
        title:"DocFxIssuesAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/BaseMultiFormatIssueProviderFixture_3',
        title:"BaseMultiFormatIssueProviderFixture<TIssueProvider, TSettings, TLogFileFormat>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/ReportIssuesToPullRequestSettings',
        title:"ReportIssuesToPullRequestSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestsAliasConstants',
        title:"PullRequestsAliasConstants",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestIssuesException',
        title:"PullRequestIssuesException",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/BaseRuleUrlResolver_1',
        title:"BaseRuleUrlResolver<T>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/MsBuildIssuesSettings',
        title:"MsBuildIssuesSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests.Tfs/ITfsCredentials',
        title:"ITfsCredentials",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/Aliases',
        title:"Aliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/BaseMultiFormatIssueProvider_2',
        title:"BaseMultiFormatIssueProvider<TSettings, TIssueProvider>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssueProviderSettings',
        title:"IssueProviderSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/Aliases',
        title:"Aliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests.Tfs/TfsPullRequestVote',
        title:"TfsPullRequestVote",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/GenericIssueReportTemplate',
        title:"GenericIssueReportTemplate",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/MsBuildRuleDescription',
        title:"MsBuildRuleDescription",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/IPullRequestSystem',
        title:"IPullRequestSystem",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestDiscussionComment',
        title:"PullRequestDiscussionComment",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/RepositorySettings',
        title:"RepositorySettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssuesAliasConstants',
        title:"IssuesAliasConstants",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeMultiFormatIssueProvider',
        title:"FakeMultiFormatIssueProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/ViewBagHelper',
        title:"ViewBagHelper",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/GenericIssueReportFormatSettingsExtensions',
        title:"GenericIssueReportFormatSettingsExtensions",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/MsBuildIssuesAliases',
        title:"MsBuildIssuesAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssueCommentFormat',
        title:"IssueCommentFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.DocFx/DocFxIssuesSettings',
        title:"DocFxIssuesSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestDiscussionStatus',
        title:"PullRequestDiscussionStatus",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests.Tfs/TfsPullRequestSystemAliases',
        title:"TfsPullRequestSystemAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/DevExtremeTheme',
        title:"DevExtremeTheme",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/IPullRequestDiscussionComment',
        title:"IPullRequestDiscussionComment",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestIssueResult',
        title:"PullRequestIssueResult",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/MsBuildIssuesProvider',
        title:"MsBuildIssuesProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/HtmlDxDataGridOption',
        title:"HtmlDxDataGridOption",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/ColumnSortOrderExtensions',
        title:"ColumnSortOrderExtensions",
        description:""
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
