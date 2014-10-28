

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            server: {
                src: ['Gruntfile.js', 
                            'server/features/**/*.js',
                            'server/server.js',
                            'server/routes/**/*.js',
                            'server/manager/**/*.js',
                            'server/dao/**/*.js',
                            'server/util/**/*.js',
                            'server/middleware/**/*.js',
                            'server/config/**/*.js'
                        ]
            },
            client: {
                options: {
                    extract: 'auto'
                },
                src: ['server/public/*.html', 'server/public/elements/**/*.html', 'server/public/elements/**/*.js', 'server/public/util/**/*.js']
            }
        },
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');    
    
    grunt.registerTask('server-test', ['jshint:server']);
        
    grunt.registerTask('default', ['jshint:client', 'jshint:server']);

};
