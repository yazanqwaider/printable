const selector = ".content";

let pageTemplate = "";

pageTemplate+= getDocStart();

const header = getHeader();
pageTemplate+= header;

const body = getBody(selector);
pageTemplate+= body;

pageTemplate+= getDocEnd();

let iframeElement = createPageFrame();

iframeElement = readyToPrint(iframeElement, pageTemplate);

print(iframeElement);


function getDocStart() {
    return "<html>";
}

function getDocEnd() {
    return "</html>";
}

function getHeader() {
    return "<head></head>";
}

function getBody(selector = null) {
    const target = (selector)? document.querySelector(selector) : document.body;
    const printedContent = target.innerHTML;
    return `<body>${printedContent}</body>`;
}

function createPageFrame() {
    const iframeElement = document.createElement('iframe');
    iframeElement.style.border = "0";
    iframeElement.style.visibility = 'hidden'
      iframeElement.style.left = '-1px'
    return iframeElement;
}

function readyToPrint(iframeElement, pageTemplate) {
    iframeElement.srcdoc = pageTemplate;
    document.body.appendChild(iframeElement);
    iframeElement.focus();
    return iframeElement;
}

function print(iframeElement) {
    iframeElement.contentWindow.print();
}