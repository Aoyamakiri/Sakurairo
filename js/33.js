(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[33],{4278:e=>{e.exports=function(e){return{name:"Pony",keywords:{keyword:"actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor",meta:"iso val tag trn box ref",literal:"this false true"},contains:[{className:"type",begin:"\\b_?[A-Z][\\w]*",relevance:0},{className:"string",begin:'"""',end:'"""',relevance:10},{className:"string",begin:'"',end:'"',contains:[e.BACKSLASH_ESCAPE]},{className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE],relevance:0},{begin:e.IDENT_RE+"'",relevance:0},{className:"number",begin:"(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",relevance:0},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}}},517:e=>{e.exports=function(e){const n={$pattern:/-?[A-z\.\-]+\b/,keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",built_in:"ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"},a={begin:"`[\\s\\S]",relevance:0},s={className:"variable",variants:[{begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]},t={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],contains:[a,s,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},r={className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]},i=e.inherit(e.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,end:/#>/}],contains:[{className:"doctag",variants:[{begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/},{begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/}]}]}),o={className:"built_in",variants:[{begin:"(".concat("Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",")+(-)[\\w\\d]+")}]},l={className:"class",beginKeywords:"class enum",end:/\s*[{]/,excludeEnd:!0,relevance:0,contains:[e.TITLE_MODE]},c={className:"function",begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",begin:/\w[\w\d]*((-)[\w\d]+)*/,relevance:0},{begin:/\(/,end:/\)/,className:"params",relevance:0,contains:[s]}]},d={begin:/using\s/,end:/$/,returnBegin:!0,contains:[t,r,{className:"keyword",begin:/(using|assembly|command|module|namespace|type)/}]},p={variants:[{className:"operator",begin:"(".concat("-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",")\\b")},{className:"literal",begin:/(-){1,2}[\w\d-]+/,relevance:0}]},m={className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,relevance:0,contains:[{className:"keyword",begin:"(".concat(n.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,relevance:0},e.inherit(e.TITLE_MODE,{endsParent:!0})]},u=[m,i,a,e.NUMBER_MODE,t,r,o,s,{className:"literal",begin:/\$(null|true|false)\b/},{className:"selector-tag",begin:/@\B/,relevance:0}],b={begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",u,{begin:"("+["string","char","byte","int","long","bool","decimal","single","double","DateTime","xml","array","hashtable","void"].join("|")+")",className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,relevance:0})};return m.contains.unshift(b),{name:"PowerShell",aliases:["pwsh","ps","ps1"],case_insensitive:!0,keywords:n,contains:u.concat(l,c,d,p,b)}}},4274:e=>{e.exports=function(e){const n=e.regex,a=["displayHeight","displayWidth","mouseY","mouseX","mousePressed","pmouseX","pmouseY","key","keyCode","pixels","focused","frameCount","frameRate","height","width","size","createGraphics","beginDraw","createShape","loadShape","PShape","arc","ellipse","line","point","quad","rect","triangle","bezier","bezierDetail","bezierPoint","bezierTangent","curve","curveDetail","curvePoint","curveTangent","curveTightness","shape","shapeMode","beginContour","beginShape","bezierVertex","curveVertex","endContour","endShape","quadraticVertex","vertex","ellipseMode","noSmooth","rectMode","smooth","strokeCap","strokeJoin","strokeWeight","mouseClicked","mouseDragged","mouseMoved","mousePressed","mouseReleased","mouseWheel","keyPressed","keyPressedkeyReleased","keyTyped","print","println","save","saveFrame","day","hour","millis","minute","month","second","year","background","clear","colorMode","fill","noFill","noStroke","stroke","alpha","blue","brightness","color","green","hue","lerpColor","red","saturation","modelX","modelY","modelZ","screenX","screenY","screenZ","ambient","emissive","shininess","specular","add","createImage","beginCamera","camera","endCamera","frustum","ortho","perspective","printCamera","printProjection","cursor","frameRate","noCursor","exit","loop","noLoop","popStyle","pushStyle","redraw","binary","boolean","byte","char","float","hex","int","str","unbinary","unhex","join","match","matchAll","nf","nfc","nfp","nfs","split","splitTokens","trim","append","arrayCopy","concat","expand","reverse","shorten","sort","splice","subset","box","sphere","sphereDetail","createInput","createReader","loadBytes","loadJSONArray","loadJSONObject","loadStrings","loadTable","loadXML","open","parseXML","saveTable","selectFolder","selectInput","beginRaw","beginRecord","createOutput","createWriter","endRaw","endRecord","PrintWritersaveBytes","saveJSONArray","saveJSONObject","saveStream","saveStrings","saveXML","selectOutput","popMatrix","printMatrix","pushMatrix","resetMatrix","rotate","rotateX","rotateY","rotateZ","scale","shearX","shearY","translate","ambientLight","directionalLight","lightFalloff","lights","lightSpecular","noLights","normal","pointLight","spotLight","image","imageMode","loadImage","noTint","requestImage","tint","texture","textureMode","textureWrap","blend","copy","filter","get","loadPixels","set","updatePixels","blendMode","loadShader","PShaderresetShader","shader","createFont","loadFont","text","textFont","textAlign","textLeading","textMode","textSize","textWidth","textAscent","textDescent","abs","ceil","constrain","dist","exp","floor","lerp","log","mag","map","max","min","norm","pow","round","sq","sqrt","acos","asin","atan","atan2","cos","degrees","radians","sin","tan","noise","noiseDetail","noiseSeed","random","randomGaussian","randomSeed"],s=e.IDENT_RE,t={variants:[{match:n.concat(n.either(...a),n.lookahead(/\s*\(/)),className:"built_in"},{relevance:0,match:n.concat(/\b(?!for|if|while)/,s,n.lookahead(/\s*\(/)),className:"title.function"}]},r={match:[/new\s+/,s],className:{1:"keyword",2:"class.title"}},i={relevance:0,match:[/\./,s],className:{2:"property"}},o={variants:[{match:[/class/,/\s+/,s,/\s+/,/extends/,/\s+/,s]},{match:[/class/,/\s+/,s]}],className:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}};return{name:"Processing",aliases:["pde"],keywords:{keyword:["abstract","assert","break","case","catch","const","continue","default","else","enum","final","finally","for","if","import","instanceof","long","native","new","package","private","private","protected","protected","public","public","return","static","strictfp","switch","synchronized","throw","throws","transient","try","void","volatile","while"],literal:"P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI null true false",title:"setup draw",variable:"super this",built_in:[...a,"BufferedReader","PVector","PFont","PImage","PGraphics","HashMap","String","Array","FloatDict","ArrayList","FloatList","IntDict","IntList","JSONArray","JSONObject","Object","StringDict","StringList","Table","TableRow","XML"],type:["boolean","byte","char","color","double","float","int","long","short"]},contains:[o,r,t,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE]}}},2897:e=>{e.exports=function(e){return{name:"Python profiler",contains:[e.C_NUMBER_MODE,{begin:"[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",end:":",excludeEnd:!0},{begin:"(ncalls|tottime|cumtime)",end:"$",keywords:"ncalls tottime|10 cumtime|10 filename",relevance:10},{begin:"function calls",end:"$",contains:[e.C_NUMBER_MODE],relevance:10},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:"\\(",end:"\\)$",excludeBegin:!0,excludeEnd:!0,relevance:0}]}}},1610:e=>{e.exports=function(e){const n={begin:/\(/,end:/\)/,relevance:0},a={begin:/\[/,end:/\]/},s={className:"comment",begin:/%/,end:/$/,contains:[e.PHRASAL_WORDS_MODE]},t={className:"string",begin:/`/,end:/`/,contains:[e.BACKSLASH_ESCAPE]},r=[{begin:/[a-z][A-Za-z0-9_]*/,relevance:0},{className:"symbol",variants:[{begin:/[A-Z][a-zA-Z0-9_]*/},{begin:/_[A-Za-z0-9_]*/}],relevance:0},n,{begin:/:-/},a,s,e.C_BLOCK_COMMENT_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,t,{className:"string",begin:/0'(\\'|.)/},{className:"string",begin:/0'\\s/},e.C_NUMBER_MODE];return n.contains=r,a.contains=r,{name:"Prolog",contains:r.concat([{begin:/\.$/}])}}},8772:e=>{e.exports=function(e){const n="[ \\t\\f]*",a=n+"[:=]"+n,s="[ \\t\\f]+",t="([^\\\\:= \\t\\f\\n]|\\\\.)+",r={end:"([ \\t\\f]*[:=][ \\t\\f]*|[ \\t\\f]+)",relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\\\"},{begin:"\\\\\\n"}]}};return{name:".properties",disableAutodetect:!0,case_insensitive:!0,illegal:/\S/,contains:[e.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{begin:t+a},{begin:t+s}],contains:[{className:"attr",begin:t,endsParent:!0}],starts:r},{className:"attr",begin:t+n+"$"}]}}},9880:e=>{e.exports=function(e){const n={match:[/(message|enum|service)\s+/,e.IDENT_RE],scope:{1:"keyword",2:"title.class"}};return{name:"Protocol Buffers",keywords:{keyword:["package","import","option","optional","required","repeated","group","oneof"],type:["double","float","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","bool","string","bytes"],literal:["true","false"]},contains:[e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,n,{className:"function",beginKeywords:"rpc",end:/[{;]/,excludeEnd:!0,keywords:"rpc returns"},{begin:/^\s*[A-Z_]+(?=\s*=[^\n]+;$)/}]}}},4897:e=>{e.exports=function(e){const n=e.COMMENT("#","$"),a="([A-Za-z_]|::)(\\w|::)*",s=e.inherit(e.TITLE_MODE,{begin:a}),t={className:"variable",begin:"\\$"+a},r={className:"string",contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/}]};return{name:"Puppet",aliases:["pp"],contains:[n,t,r,{beginKeywords:"class",end:"\\{|;",illegal:/=/,contains:[s,n]},{beginKeywords:"define",end:/\{/,contains:[{className:"section",begin:e.IDENT_RE,endsParent:!0}]},{begin:e.IDENT_RE+"\\s+\\{",returnBegin:!0,end:/\S/,contains:[{className:"keyword",begin:e.IDENT_RE,relevance:.2},{begin:/\{/,end:/\}/,keywords:{keyword:"and case default else elsif false if in import enherits node or true undef unless main settings $string ",literal:"alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",built_in:"architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version"},relevance:0,contains:[r,n,{begin:"[a-zA-Z_]+\\s*=>",returnBegin:!0,end:"=>",contains:[{className:"attr",begin:e.IDENT_RE}]},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},t]}],relevance:0}]}}},6241:e=>{e.exports=function(e){return{name:"PureBASIC",aliases:["pb","pbi"],keywords:"Align And Array As Break CallDebugger Case CompilerCase CompilerDefault CompilerElse CompilerElseIf CompilerEndIf CompilerEndSelect CompilerError CompilerIf CompilerSelect CompilerWarning Continue Data DataSection Debug DebugLevel Declare DeclareC DeclareCDLL DeclareDLL DeclareModule Default Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM EnableDebugger EnableExplicit End EndDataSection EndDeclareModule EndEnumeration EndIf EndImport EndInterface EndMacro EndModule EndProcedure EndSelect EndStructure EndStructureUnion EndWith Enumeration EnumerationBinary Extends FakeReturn For ForEach ForEver Global Gosub Goto If Import ImportC IncludeBinary IncludeFile IncludePath Interface List Macro MacroExpandedCount Map Module NewList NewMap Next Not Or Procedure ProcedureC ProcedureCDLL ProcedureDLL ProcedureReturn Protected Prototype PrototypeC ReDim Read Repeat Restore Return Runtime Select Shared Static Step Structure StructureUnion Swap Threaded To UndefineMacro Until Until  UnuseModule UseModule Wend While With XIncludeFile XOr",contains:[e.COMMENT(";","$",{relevance:0}),{className:"function",begin:"\\b(Procedure|Declare)(C|CDLL|DLL)?\\b",end:"\\(",excludeEnd:!0,returnBegin:!0,contains:[{className:"keyword",begin:"(Procedure|Declare)(C|CDLL|DLL)?",excludeEnd:!0},{className:"type",begin:"\\.\\w*"},e.UNDERSCORE_TITLE_MODE]},{className:"string",begin:'(~)?"',end:'"',illegal:"\\n"},{className:"symbol",begin:"#[a-zA-Z_]\\w*\\$?"}]}}},6824:e=>{e.exports=function(e){return{aliases:["pycon"],contains:[{className:"meta.prompt",starts:{end:/ |$/,starts:{end:"$",subLanguage:"python"}},variants:[{begin:/^>>>(?=[ ]|$)/},{begin:/^\.\.\.(?=[ ]|$)/}]}]}}},8444:e=>{e.exports=function(e){const n=e.regex,a=/[\p{XID_Start}_]\p{XID_Continue}*/u,s=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],t={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:s,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},r={className:"meta",begin:/^(>>>|\.\.\.) /},i={className:"subst",begin:/\{/,end:/\}/,keywords:t,illegal:/#/},o={begin:/\{\{/,relevance:0},l={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,r],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,r],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,r,o,i]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,r,o,i]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,o,i]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,o,i]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},c="[0-9](_?[0-9])*",d=`(\\b(${c}))?\\.(${c})|\\b(${c})\\.`,p=`\\b|${s.join("|")}`,m={className:"number",relevance:0,variants:[{begin:`(\\b(${c})|(${d}))[eE][+-]?(${c})[jJ]?(?=${p})`},{begin:`(${d})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${p})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${p})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${p})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${p})`},{begin:`\\b(${c})[jJ](?=${p})`}]},u={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:t,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},b={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:["self",r,m,l,e.HASH_COMMENT_MODE]}]};return i.contains=[l,m,r],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:t,illegal:/(<\/|->|\?)|=>/,contains:[r,m,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},l,u,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[b]},{variants:[{match:[/\bclass/,/\s+/,a,/\s*/,/\(\s*/,a,/\s*\)/]},{match:[/\bclass/,/\s+/,a]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[m,b,l]}]}}}}]);
//# sourceMappingURL=33.js.map