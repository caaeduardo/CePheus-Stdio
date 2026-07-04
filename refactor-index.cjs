const fs = require("fs");
const path = require("path");

const root = "c:\\Users\\ADM\\Downloads\\CePheus Stdio";
const prettyPath = path.join(root, "index.pretty.html");
const targetPath = path.join(root, "index.html");

let html = fs.readFileSync(prettyPath, "utf16le").replace(/^\uFEFF/, "");

html = html.replace(/<!doctype html>/i, "<!DOCTYPE html>");

html = html.replace(
  /<title>Cepheus Stdio\.?<\/title>/,
  "<title>CePheus Stdio | </title>",
);



html = html.replace(
  /<meta http-equiv="Content-Type" content="text\/html; charset=UTF-8" \/>\r?\n/g,
  "",
);
html = html.replace(
  /<meta http-equiv="X-UA-Compatible" content="ie=edge" \/>\r?\n/g,
  "",
);
html = html.replace(
  /<link href="css\/main\.min\.css" rel="stylesheet" type="text\/css" \/>/,
  '<link href="css/main.min.css" rel="stylesheet" />',
);
html = html.replace(
  /<meta charset="UTF-8" \/>/,
  '<meta charset="UTF-8" />',
);
html = html.replace(
  '<meta name="viewport" content="width=device-width,minimum-scale=1" />',
  '<meta name="viewport" content="width=device-width, initial-scale=1" />',
);
html = html.replace(
  '<meta property="og:url" content="" />',
  '<meta property="og:url" content="" />\n    <link rel="canonical" href="https://prime-exits.com/" />',
);

html = html.replace(
  '<nav class="nav">',
  '<nav class="nav" aria-label="Primary navigation">',
);
html = html.replace(
  '<nav class="strategy-nav">',
  '<nav class="strategy-nav" aria-label="Exit strategy options">',
);
html = html.replace(
  '<nav class="menu-nav">',
  '<nav class="menu-nav" aria-label="Mobile navigation">',
);

html = html.replace(/<button\b([^>]*)>/g, (match, attrs) => {
  if (/\btype=/.test(attrs)) return match;
  return `<button type="button"${attrs}>`;
});

html = html.replace(/\sautoplay=""/g, "");
html = html.replace(/playsinline=""/g, "playsinline");
html = html.replace(/loop="loop"/g, "loop");
html = html.replace(/muted=""/g, "muted");
html = html.replace(/required=""/g, "required");
html = html.replace(/disabled="disabled"/g, "disabled");
html = html.replace(/selected="selected"/g, "selected");
html = html.replace(/hidden=""/g, "hidden");
html = html.replace(/async=""/g, "async");
html = html.replace(/defer="defer"/g, "defer");

html = html.replace(/<label([^>]*?)\sfor="[^"]*"([^>]*)>/g, "<label$1$2>");
html = html.replace(
  /<div class="quiz__stage-number">/g,
  '<span class="quiz__stage-number">',
);
html = html.replace(
  /<div class="quiz__stage-text">/g,
  '<span class="quiz__stage-text">',
);
html = html.replace(/<\/div>(\s*)<span class="quiz__stage-text">/g, "</span>$1<span class=\"quiz__stage-text\">");
html = html.replace(/<\/div><\/label/g, "</span></label");

html = html.replace(/href="tel: \+1 \(414\) 519-5722"/g, 'href="tel:+14145195722"');
html = html.replace(
  /<span>\+1 \(414\) 519-5722<\/span>/g,
  "<span>+1&nbsp;(414)&nbsp;519&#8209;5722</span>",
);

html = html.replace(/YouÔÇÖll/g, "You'll");
html = html.replace(/donÔÇÖt/g, "don't");
html = html.replace(/ÔÇ£/g, '"');
html = html.replace(/ÔÇØ/g, '"');
html = html.replace(/ÔÇô/g, "-");
html = html.replace(/┬®/g, "&copy;");
html = html.replace(/Florida,┬á/g, "Florida, ");
html = html.replace(/\[email┬áprotected\]/g, "[email protected]");

html = html.replace(
  '<script src="js/script.min.js" type="text/javascript"></script>',
  '<script src="js/script.min.js"></script>',
);
html = html.replace(
  /<script\s+type="text\/javascript"\s+id="hs-script-loader"/g,
  '<script id="hs-script-loader"',
);

html = html.replace(/\s*<script>\s*\(function \(\) \{[\s\S]*?\}\)\(\);\s*<\/script>\s*/m, "\n");
html = html.replace(
  /\s*<iframe\s+height="1"\s+width="1"\s+style="[\s\S]*?"\s*><\/iframe>\s*/m,
  "\n",
);

html = html.replace(/<(meta|link|img|input|source)\b([^>]*?)\s*\/>/g, "<$1$2>");

fs.writeFileSync(targetPath, html, "utf8");
