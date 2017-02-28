desc "Imports data file from project root/data"
task :importer => :environment do
  file_path = "#{Rails.root}/data/test.csv"
  QuestionImporterService.import(file_path)
end
