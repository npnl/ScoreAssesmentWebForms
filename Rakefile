require "rubygems"
require "tmpdir"

# Change your GitHub reponame
GITHUB_REPONAME = "amitasviper/amitasviper.github.io"


task :generate do
  system "npm run build"
end


task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    puts "Working in tmp dir: #{tmp}"
    pwd = Dir.pwd

    cp_r "#{pwd}/.git", tmp

    Dir.chdir tmp
    system "git reset -q && git checkout -q . && git clean -dfq"
    system "git checkout deploy"
    system "git pull origin deploy"

    cp_r "#{pwd}/build/.", tmp
    system "git add ."

    message = "Site updated at #{Time.now.utc}"
    system "git commit -q -m #{message.inspect}"
    system "git push -f npnl deploy:gh-pages"
    Dir.chdir pwd
  end
end
