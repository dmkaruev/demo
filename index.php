<?php
$css = '
    <link rel="stylesheet" href="//fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" />
    <link rel="stylesheet" href="//cdn.skarui.ru/css/base.css" />
    <link rel="stylesheet" href="css/style.css" />
';
$js = '
    <script src="//cdn.skarui.ru/js/jquery.js"></script>
    <script src="js/script.js"></script>
';
?>
<!DOCTYPE html>
<html lang="ru">
<?php
    require_once 'head.php';
?>
<body>
<div class="container">
<?php
    require_once 'header.php';
?>
<main class="main">
    <article class="article">
        <div class="wrapper">
            
        </div>
    </article>
</main>
<?php
    require_once 'footer.php';
?>
</div>
<?php
    echo $js;
?>
</body>
</html>