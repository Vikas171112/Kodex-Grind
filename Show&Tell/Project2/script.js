const input = document.getElementById("htmlInput");
const preview = document.getElementById("previewArea");
const tree = document.getElementById("domTree");

const tag = document.getElementById("tag");
const classes = document.getElementById("classes");
const children = document.getElementById("children");
/*
Problem Kya hai?
user ne Html likha to browser ek dom bnata hai aur mujhe usi dom ko visually present krna hai
soln:
iska matlab hai muje tree ko explore karna hai to chatgpt se puchthe hai ki kais eexplore karna chahiye =====>>>>ans is recursion (function caliing itslef).
sabse pahle to preview me jo hai uska value le lo
maan lo preview mw kuch aisa hai:
<div>
  <h1>Hello</h1>
  <p>World</p>
</div>
ek kaam kr sakte hai agar mere paas div as a element aa jaye to uske children pta chal sakta hai div.children kre to
chalo child mil gya [h1,p]--isko array me convert karna hoga tabhi ispe loop kar payenge
tree wale side me ek li bna lete hai phle jisme elements ko render karwayenge
sabse phle div aaya mere paas  to ek kaam karo li me add kar dete hai
ab uske children ke paas jayenge ek ek kar ke h1 me check krenge ki uske child hai ya nhai jo ki yha nhai hai
lekin usse phle ye jo chid h1 hai isko li ke niche ek aur list bna ke add to karna prega na to ul bna lo add kar do child ko
ab jo v ul hai usko check karo ki uske paas child hai yanahi hai jo yha pe nahi hai h1 k paas 
********Bhai overall mudda ye hai ki********
 1.Sabse pahle root element ko pakdo
 2.root elements ke children ko explore karo
 3.Jo v children mile unke liye node bnao
 4.ye teeno process ko har ek child ke liye repeat karo
 matlab ---->ek baar previewwale div ko pakra fir dekho uske child kitna hai jo v child  hai usko node me add kro phla child div mila to usko add karo node me phr div ko pakro uske childs ko check karo [h1,p] mila dono ko add akro li ke ul me 
 again h1 ko pakro exploe karo child hai ki nhai nahi ha to ruk jao whi pe phr dusre child ko pakro check akro nahi hai to ruk jao whi pe
**/

function updateDOM() {
  preview.innerHTML = input.value;

  tree.innerHTML = "";

  buildTree(preview, tree);
}

function buildTree(element, parent) {
  if (element.children.length === 0) {
    //rlrment ke  paas koi child nahi hai
    return;
  } else {
    Array.from(element.children).forEach((child) => {
      const li = document.createElement("li");

      li.textContent = "<" + child.tagName.toLowerCase() + ">";

      parent.appendChild(li);

      li.addEventListener("click", (e) => {
        e.stopPropagation();

        highlightElement(child);

        showNodeInfo(child);
      });

      const ul = document.createElement("ul");

      li.appendChild(ul);

      buildTree(child, ul);
    });
  }
}

function highlightElement(element) {
  const all = preview.querySelectorAll("*");

  all.forEach((el) => {
    el.classList.remove("highlight");
  });

  element.classList.add("highlight");
}

function showNodeInfo(element) {
  tag.textContent = "Tag: " + element.tagName;
  classes.textContent = "Classes: " + (element.className || "None");
  children.textContent = "Children: " + element.children.length;
}

input.addEventListener("input", updateDOM);

updateDOM();
