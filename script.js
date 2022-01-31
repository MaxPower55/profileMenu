var n;
var list = document.getElementById('list');
var userCard = document.getElementsByClassName('user');
var userCardFilter = [...userCard].filter(Element => Element.classList.contains('user'));
var userDetailsHeader = document.getElementsByClassName('details__header');
var userDetailsText = document.getElementsByClassName('details__text');

var user1 = document.getElementById('user1');
var user2 = document.getElementById('user2');
var user3 = document.getElementById('user3');
var user4 = document.getElementById('user4');

user1.addEventListener('mouseover',function() {n = 0; showCard(n)},false);
user2.addEventListener('mouseover',function() {n = 1; showCard(n)},false);
user3.addEventListener('mouseover',function() {n = 2; showCard(n)},false);
user4.addEventListener('mouseover',function() {n = 3; showCard(n)},false);

function showCard(n) {
    for(var i = 0;i < userCard.length;i++) {
        userDetailsHeader[i].className = 'details__header';
        userDetailsText[i].className = 'details__text';
    }
    userDetailsHeader[n].className = 'details__header details__header-none';
    userDetailsText[n].className = 'details__text details__text-none';
}