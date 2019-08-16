/// <summary>
/// Helper class for IO routines.
/// </summary>
public static class IOHelper
{
    /// <summary>
    /// Quotes a path.
    /// </summary>
    /// <param name="path">Path to quote.</param>
    /// <returns>Quoted path.</returns>
    public static string QuotePath(string path)
    {
        path.ThrowIfNullOrEmpty(nameof(path));

        return "\"" + System.IO.Path.GetFullPath(path) + "\"";
    }

    /// <summary>
    /// Quotes a path.
    /// </summary>
    /// <param name="path">Path to quote.</param>
    /// <returns>Quoted path.</returns>
    public static string QuotePath(Cake.Core.IO.Path path)
    {
        path.ThrowIfNull(nameof(path));

        return QuotePath(path.ToString());
    }
}