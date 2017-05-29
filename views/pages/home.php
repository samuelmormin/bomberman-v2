<div class="header">
    <img src="<?= URL ?>assets/img/logo.png" alt="">
</div>
<button id="myBtn">Voir les règles du jeu</button>
<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <img src="assets/img/rules.png" alt="">
    </div>
</div>
<div class="lives" id="lives">
    <div class="live"><img src="assets/img/life.png" alt=""></div>
    <div class="live"><img src="assets/img/life.png" alt=""></div>
    <div class="live"><img src="assets/img/life.png" alt=""></div>
</div>
<div class="end-buttons">
    <button><a href="home">Jouer (Solo)</a></button>
    <button><a href="home">Jouer (IA)</a></button>
</div>

<script type="text/javascript" src="<?= URL ?>assets/js/start-play.js"></script>
<script type="text/javascript" src="<?= URL ?>assets/js/game-set.js"></script>
<script type="text/javascript" src="<?= URL ?>assets/js/player.js"></script>
<script type="text/javascript" src="<?= URL ?>assets/js/a_i_player3.js"></script>